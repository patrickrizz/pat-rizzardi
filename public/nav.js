const indexNav = [
    {
        link: "/#projects",
        name: "Projects",
        number: "01."
    }, 
    {
        link: "/#about",
        name: "About",
        number: "02."
    },
    // {
    //     link: "/#experience",
    //     name: "Experience",
    //     number: "03."
    // },
    {
        link: "/#blog",
        name: "Recent Posts",
        number: "03."
    },
    {
        link: "/#contact",
        name: "Contact",
        number: "04."
    },
    {
        link: "https://blog.patrizzardi.com/ghost",
        name: "Login"
    }

];

const clashNav = [
    {
        link: "/clash-of-clans",
        name: "Summary",
        number: ""
    }, 
    {
        link: "/clash-of-clans/member-stats",
        name: "Player Ranking",
        number: ""
    },
    // {
    //     link: "/#experience",
    //     name: "Experience",
    //     number: "03."
    // },
    {
        link: "/clash-of-clans/member-stats",
        name: "Clan Ranking",
        number: ""
    },
    {
        link: "/auth/logout",
        name: "Logout"
    }

];

exports.indexNav = indexNav;
exports.clashNav = clashNav;
