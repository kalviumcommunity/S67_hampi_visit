const items = []; // Temporary in-memory storage

exports.getAllItems = (req, res) => {
    res.json(items);
};

exports.getItemById = (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    item ? res.json(item) : res.status(404).json({ message: "Item not found" });
};

exports.createItem = (req, res) => {
    const newItem = { id: Date.now().toString(), ...req.body };
    items.push(newItem);
    res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index !== -1) {
        items[index] = { ...items[index], ...req.body };
        res.json(items[index]);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

exports.deleteItem = (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index !== -1) {
        items.splice(index, 1);
        res.json({ message: "Item deleted" });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};