(() => {
    let listData = [
    {
        text: "Mail",
        icon: "far fa-envelope-open",
        items: [
            {
                text: "Offers",
                icon: "far fa-bell"
            },
            {
                text: "Contacts",
                icon: "far fa-address-book"
            },
            {
                text: "Calendar",
                icon: "far fa-calendar-alt",
                items: [
                    {
                        text: "Deadlines",
                        icon: "far fa-clock"
                    },
                    {
                        text: "Meetings",
                        icon: "fas fa-users"
                    },
                    {
                        text: "Workouts",
                        icon: "fas fa-basketball-ball"
                    },
                    {
                        text: "Events",
                        icon: "fas fa-mug-hot"
                    }
                ]
            }
        ]
    },
    {
        text: "Inbox",
        icon: "far fa-folder-open",
        items: [
            {
                text: "Admin",
                icon: "far fa-folder-open"
            },
            {
                text: "Corporate",
                icon: "far fa-folder-open"
            },
            {
                text: "Finance",
                icon: "far fa-folder-open"
            },
            {
                text: "Other",
                icon: "far fa-folder-open"
            }
        ]
    },
    {
        text: "Notes",
        icon: "far fa-comment",
    },
    {
        text: "Settings",
        icon: "fas fa-cogs"
    },
    {
        text: "Devices",
        icon: "fas fa-desktop"
    },
    {
        text: "Deleted Items",
        icon: "fas fa-trash-alt"
    }

]

let treeview1 = new TreeList.default({
    element: "treeview1",
    editable: true
});

treeview1.on("edit", (elID, value) => {
    console.log("Edit callback", elID, value);
});

let treeview2 = new TreeList.default({
    element: "treeview2",
});

let treeview3 = new TreeList.default({
    element: "treeview3",
});


})();