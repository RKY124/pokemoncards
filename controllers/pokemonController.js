module.exports.viewAll = function(req, res, next) {
    const pokemon = {
        id: 1,
        name: 'Charmander',
        image: 'data:image/png;base64,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',
        elementimage: 'data:image/jpeg;base64,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',
        health: '50HP',
        attack1: 'Bite',
        attack2: 'Ember',
        damage1: '10',
        damage2: '30',
        weakness: 'data:image/jpeg;base64,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',
        retreatcost: 'data:image/jpeg;base64,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'
    };
    res.render('index', { title: 'Express' });
};