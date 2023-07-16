import { MdClose } from "react-icons/md"
import "./Search.scss";

import prod from "../../../assets/products/headphone-prod-1.webp"
const Search = ({setshowSearch}) => {
    return (
        <div className="search-modal">
            <div className="form-feild">
                <input type="text" autoFocus placeholder="Search for Products"/>
                <MdClose onClick={() => setshowSearch(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt=""/>
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <MdClose className="close-btn"/>
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <div className="text">
                                <span>3</span>
                                <span>x</span>
                                <span>&#8377; 4567</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
