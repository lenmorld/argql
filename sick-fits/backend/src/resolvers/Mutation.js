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
};

module.exports = Mutations;
