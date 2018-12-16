const Query = {
    // dogs(parent, args, ctx, info) {

    //     // TODO: pull data from DB (Prisma)
    //     // return [
    //     //     { name: 'Snickers' }, 
    //     //     { name: 'Sunny' }
    //     // ];

    //     global.dogs = global.dogs || [];
    //     return global.dogs;
    // }

    async items(parent, args, ctx, info) {
        const items = await ctx.db.query.items();
        console.log(items);
        return items;
    },
};

module.exports = Query;
