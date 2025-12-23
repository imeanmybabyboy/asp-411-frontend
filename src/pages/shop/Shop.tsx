import { useEffect, useState } from "react";
import "./ui/Shop.css";

export default function Shop() {
    const [model, setModel] = useState<ShopIndexViewModel>({ groups: [] });

    useEffect(() => {
        fetch("https://localhost:7012/Shop/ApiIndex")
        .then(r => r.json())
        .then(setModel);
    }, [])

    return (
        <>
            <div className="text-center">
                <h1 className="display-4">Крамниця</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 w-100">
                {model.groups.map(g => <GroupCard key={g.id} group={g}/>)}
            </div>
        </>
    );
}

function GroupCard({ group }: { group: Group }) {
    return (
        <div className="col">
            <a className="nav-link text-dark h-100" href="#!">
                <div className="card h-100">
                    <img
                        src={group.imageUrl}
                        className="card-img-top"
                        alt={group.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{group.name}</h5>
                        <p className="card-text">{group.descirption}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

interface Group {
    id: string;
    name: string;
    descirption: string;
    imageUrl: string;
    slug: string;
    deleteAt: string;
    //   products:
}

interface ShopIndexViewModel {
    groups: Array<Group>;
}
