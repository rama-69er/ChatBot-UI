const dummyWebpages = [
    { id: 1, url: 'https://example.com/about', status: 'scraped', data: ['About us content', 'Our values'] },
    { id: 2, url: 'https://example.com/contact', status: 'pending', data: [] },
    { id: 3, url: 'https://example.com/products', status: 'scraped', data: ['Product list', 'Pricing info'] }
];

const WebpageList = ({ onSelect }) => {
    return (
        <div className="webpage-list">
            <h2>Webpages</h2>
            <ul>
                {dummyWebpages.map((page) => (
                    <li style={{ listStyle: "none" }} key={page.id} onClick={() => onSelect(page)}>
                        <a href="#">{page.url}</a>
                        <p>Status :
                            <span style={{ color: page.status === "pending" ? "red" : "green" }}> {page.status}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WebpageList;