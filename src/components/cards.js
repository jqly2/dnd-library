import React from "react";
import spellData from "./spellData.json";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '0',
        transform: 'translate(-50%, -50%)'
    }
};

class Spells extends React.Component {

    constructor(props) {
        super (props);
        this.state = {
            spells: spellData.jsonSpellData,
            showModal: false,
            selected:""
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(spell) {
        this.setState({ 
            showModal: true, 
            selected: spell
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        console.log(this.state.spells);
        const self = this;
        return (
            <div className="Spell-App" id="spellbook">
                <Modal 
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <img src={process.env.PUBLIC_URL + '/media/spell-cards/' + this.state.selected + '.png'} alt={this.state.selected} height="100%" width="100%"></img>
                </Modal>
                {this.state.spells.map(function (spell, index) {
                    return <img onClick={() => self.handleOpenModal(spell.name)} src={process.env.PUBLIC_URL + '/media/spell-cards/' + spell.name + '.png'} alt={spell.name} height="20%" width="20%" key={index}></img>;
                })}
            </div>
        );
    }
}

export default Spells