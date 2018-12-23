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
};

module.exports = Mutations;
