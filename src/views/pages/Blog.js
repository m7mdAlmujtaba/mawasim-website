import React from "react";

// reactstrap components
//import { Container, Row } from "reactstrap";

// Blog page sections
import Footer from "components/Footers/Footer.js";
import BlogList from "views/BlogSections/BlogList";
import FeaturedPostsSlider from "views/BlogSections/FeaturedPostsSlider";
import HomeNavbar from "components/Navbars/HomeNavbar";

class Blog extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <HomeNavbar />
                <main ref="main">
                    <FeaturedPostsSlider />
                    <br className="my-5">
                    </br>
                    {/* Blog List Section */}
                    <section className="section">
                        <BlogList />
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Blog;
