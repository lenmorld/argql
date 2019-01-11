const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
	// createDog(parent, args, ctx, info) {
	//     // TODO: create a Dog
	//     // hardcode for now
	//     global.dogs = global.dogs || [];
	//     const newDog = { name: args.name };
	//     global.dogs.push(newDog);

	//     console.log(args);

	//     return newDog;
	// }

	async createItem(parent, args, ctx, info) {
		// TODO: check if user logged in

		// reference createItem method from `prisma.graphql`
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args,
				},
			},
			info,
		);

		// console.log(item);

		return item;
	},

	updateItem(parent, args, ctx, info) {
		// first take a copy of the updates
		const updates = { ...args };
		// remove the ID from the updates
		delete updates.id;
		// run the update method
		return ctx.db.mutation.updateItem(
			{
				data: updates,
				where: {
					id: args.id,
				},
			},
			info,
		);
	},

	async deleteItem(parent, args, ctx, info) {
		const where = { id: args.id };

		// 1. find item (query)
		const item = await ctx.db.query.item({ where }, '{ id title }');
		// 2. check if they own that item, or have the permissions
		// TODO
		// 3. Delete it
		return ctx.db.mutation.deleteItem({ where }, info);
	},

	async signup(parent, args, ctx, info) {
		// normalize case
		args.email = args.email.toLowerCase();
		// hash their password		(pass, SALT / SALT length)
		const password = await bcrypt.hash(args.password, 10);
		// create the user in the DB
		const user = await ctx.db.mutation.createUser({
			data: {
				...args,			// equiv:  name: args.name, email: args.email, ...
				password,			// equiv: password: password
				permissions: { set: ['USER']},			// need this for an ENUM
			}
		}, info);			// AGAIN, createUser is our API in prisma.graphql

		// create JWT token for them
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

		// set JWT as a cookie on the response
		ctx.response.cookie('token', token, {
			httpOnly: true,			// don't allow any JS client to access cookie (XSS, chrome extension, etc)
			maxAge: 1000 * 60 * 60 * 24 * 365,		// 1 year token
		});

		// return user to the browser
		return user;
	},
};

module.exports = Mutations;
