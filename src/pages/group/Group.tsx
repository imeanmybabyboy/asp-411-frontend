import { useParams } from "react-router-dom";
import "./ui/Group.css";
import { useEffect, useState } from "react";
import type IGroup from "../../entities/group/model/IGroup";
import ProductCard from "../../entities/product/ui/ProductCard";

export default function Group() {
    const { slug } = useParams();
    const [group, setGroup] = useState<IGroup | null>(null);
    const [similarProducts, setSimilarProducts] = useState<Array<object>>([]);

    useEffect(() => {
        fetch("https://localhost:7012/Shop/ApiGroup/" + slug)
            .then((r) => r.json())
            .then((j) => {
                setGroup(j.data.group);
                setSimilarProducts(j.data.youMayLikeProducts);
            });
    }, [slug]);

    return (
        <div className="d-flex flex-column">
            <div className="text-center">
                <h1 className="display-4">Розділ: {group?.name}</h1>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-1">
                {group?.products.length! > 0 ? (
                     group?.products.map((p) => (
                          <div className="col">
                              <ProductCard key={p.id} product={p} />
                          </div>
                      )))
                    : (
                        <div className="alert alert-danger text-center w-100">
                            Товари не знайдено.
                        </div>
                    )}
            </div>

                    {group?.products.length === 0 ? (
            <div className="mt-5">
                <h5>Вам також можуть сподобатися:</h5>

                <div className="d-flex gap-4">
                    {similarProducts?.map((p: any) => (
                        <div className="d-flex">
                            <ProductCard key={p.id} product={p} width="170px" />
                        </div>
                    ))}
                </div>
            </div>

                    ) : null}
        </div>
    );
}
