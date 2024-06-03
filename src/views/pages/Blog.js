import React from "react";

// reactstrap components
//import { Container, Row } from "reactstrap";

// Blog page sections
import SimpleFooter from "components/Footers/SimpleFooter.js";
import BlogList from "views/IndexSections/BlogList";
import FeaturedPostsSlider from "views/BlogSections/FeaturedPostsSlider";
import MainNavbar from "components/Navbars/MainNavbar";

class Blog extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <MainNavbar />
                <main ref="main">
                    <FeaturedPostsSlider />
                    <hr className="my-5">
                    </hr>
                    {/* Blog List Section */}
                    <section className="section">
                        <BlogList />
                    </section>
                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default Blog;
