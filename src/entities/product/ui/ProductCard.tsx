import type IProduct from "../model/IProduct";

export default function ProductCard({
    product,
    width = "",
}: {
    product: IProduct;
    width?: string;
}) {
    return (
        <div className="card h-100 position-relative" style={width === "" ? undefined : {width: width}}>
            <div className="position-absolute top-0 end-0 m-3 bg-secondary bg-opacity-25 rounded-circle text-light wh-2 center">
                <i className="bi bi-heart" role="button"></i>
            </div>
            <a href="#!" className="nav-link text-dark h-100">
                <img
                    src={product.imageUrl ?? undefined}
                    className="card-img-top"
                    alt={product.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div
                        className="product-rating"
                        title="Оцінка 4.8 @('\n')Відгуків: 124"
                    >
                        ★★★★★
                    </div>
                </div>
            </a>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>₴&thinsp;{product.price.toFixed(2)}</span>
                <button
                    data-to-cart="@Model.Id"
                    type="button"
                    className="btn btn-outline-success shadow-none"
                    data-bs-dismiss="alert"
                    data-bs-target="#product-adding-alert"
                >
                    <i className="bi bi-cart"></i>
                </button>
            </div>
        </div>
    );
}
