const Mutations = {
    createDog(parent, args, ctx, info) {
        // TODO: create a Dog
        // hardcode for now
        global.dogs = global.dogs || [];
        const newDog = { name: args.name };
        global.dogs.push(newDog);

        console.log(args);

        return newDog;
    }
};

module.exports = Mutations;
