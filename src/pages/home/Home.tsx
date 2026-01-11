import { useContext, useEffect, useState } from "react";
import "./ui/Home.css";
import { Link } from "react-router-dom";
import type IGroup from "../../entities/group/model/IGroup";
import AppContext from "../../features/context/AppContext";

export default function Shop() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);
    const {request} = useContext(AppContext)!;

    useEffect(() => {
        request("api://Shop/ApiIndex")
        .then(data => {
            console.log(data);
            setGroups(data);
        })
    }, []);

    return (
        <>
            <div className="text-center">
                <h1 className="display-4">Крамниця</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 w-100">
                {groups.map((g) => (
                    <GroupCard key={g.id} group={g} />
                ))}
            </div>
        </>
    );
}

function GroupCard({ group }: { group: IGroup }) {
    return (
        <Link
            to={"/group/" + group.slug}
            className="text-dark h-100 text-decoration-none"
        >
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
        </Link>
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