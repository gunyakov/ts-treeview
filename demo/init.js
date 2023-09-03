
(() => {
    let listData = [
    {
        text: "Mail",
        icon: ["far", "fa-envelope"],
        iconOpen: ["far", "fa-envelope-open"],
        id: "someidstring",
        items: [
            {
                text: "Offers",
                icon: ["far", "fa-bell"]
            },
            {
                text: "Contacts",
                icon: ["far", "fa-address-book"]
            },
            {
                text: "Calendar",
                icon: ["far", "fa-calendar-alt"],
                items: [
                    {
                        text: "Deadlines",
                        icon: ["far", "fa-clock"]
                    },
                    {
                        text: "Meetings",
                        icon: ["fas", "fa-users"]
                    },
                    {
                        text: "Workouts",
                        icon: ["fas", "fa-basketball-ball"]
                    },
                    {
                        text: "Events",
                        icon: ["fas", "fa-mug-hot"]
                    }
                ]
            }
        ]
    },
    {
        text: "Inbox",
        icon: ["far", "fa-folder-open"],
        items: [
            {
                text: "Admin",
                icon: ["far", "fa-folder-open"]
            },
            {
                text: "Corporate",
                icon: ["far", "fa-folder-open"]
            },
            {
                text: "Finance",
                icon: ["far", "fa-folder-open"]
            },
            {
                text: "Other",
                icon: ["far", "fa-folder-open"]
            }
        ]
    },
    {
        text: "Notes",
        icon: ["far", "fa-comment"],
    },
    {
        text: "Settings",
        icon: ["fas", "fa-cogs"]
    },
    {
        text: "Devices",
        icon: ["fas", "fa-desktop"]
    },
    {
        text: "Deleted Items",
        icon: ["fas", "fa-trash-alt"],
    }

]

let treeview1 = new TreeList({
    element: "treeview1",
    editable: true
});

treeview1.on("edit", (elID, value) => {
    console.log("Edit callback", elID, value);
});

let treeview2 = new TreeList({
    element: "treeview2",
});

let treeview3 = new TreeList({
    element: "treeview3",
});

let treeview4 = new TreeList({
    element: "treeview4",
    items: listData,
});

treeview4.on("item.click", (elID) => {
    console.log('Element click', elID);
});

treeview4.on("item.dblclick", (elID) => {
    console.log("Element dblclick", elID);
})
treeview4.on("folder.click", (elID) => {
    console.log('Folder click', elID);
});

treeview4.on("folder.dblclick", (elID) => {
    console.log("Folder dblclick", elID);
})

treeview4.on("item.checkbox", (elID, checked) => {
    console.log('Item checkbox', elID, checked);
});

treeview4.on("folder.checkbox", (elID, checked) => {
    console.log("Folder checkbox", elID, checked);
})

let treeview5 = new TreeList({
    element: "treeview5",
    items: listData,
});

document.getElementById("itemEnable").addEventListener("click", () => {
    treeview5.checkbox(true, "item");
});

document.getElementById("folderEnable").addEventListener("click", () => {
    treeview5.checkbox(true, "folder");
});

document.getElementById("bothEnable").addEventListener("click", () => {
    treeview5.checkbox(true, "both");
});

document.getElementById("bothDisable").addEventListener("click", () => {
    treeview5.checkbox(false);
});


})();