//DEPENDENIES
import React from "react";

//PAGE
class GalleryVFX extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;

        this.setState({
        collapsed: !collapsed
        });
    };

    render() {
        const { collapsed } = this.state;

        return (
            <div></div>
        );
    }
}

export default GalleryVFX;