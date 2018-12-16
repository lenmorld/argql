const Query = {
    dogs(parent, args, ctx, info) {

        // TODO: pull data from DB (Prisma)
        return [
            { name: 'Snickers' }, 
            { name: 'Sunny' }
        ];
    }
};

module.exports = Query;
