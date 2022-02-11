import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import ModalMenuPrimary from '../../blocks/menu/ModalMenuPrimary';
import '../../assets/sass/menuicon.css';
import ModalMenuSecondary from '../../blocks/menu/ModalMenuSecondary';
import ModalMenuLanguages from '../../blocks/menu/ModalMenuLanguages';
import Actions from '../../blocks/actions/Actions';




class MenuModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
        this.menufunc = this.menufunc.bind( this );
    }

   

      menufunc = (x) => {
        x.classList.toggle("change");
      }

    open() {
        this.setState( { showModal: true } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    render() {
        return (
            <Fragment>
                <div className="menu-toggle">


                    <button onClick={ this.open.bind( this ) }  type="button" className="btn btn-lg  border-0 p-0 min-w-auto text-uppercase" data-toggle="modal" data-target="#menu-modal">
                    <div class="container" >
                            <div class="bar1" style={{backgroundColor:window.location.pathname==="/" ? 'white' : '#333' }}></div>
                            <div class="bar2" style={{backgroundColor:window.location.pathname==="/" ? 'white' : '#333' }}></div>
                            <div class="bar3" style={{backgroundColor:window.location.pathname==="/" ? 'white' : '#333' }}></div>
                    </div>


                    </button>
                </div>

                <Modal
                    className="menu-modal"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full"
                    ref={ node => this.chart = node }>
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <div className="links">
                                            <div className="links-items">
                                                <div className="links-item">
                                                    <a href={ process.env.PUBLIC_URL + "/" } className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase" data-toggle="modal" data-target="#menu-modal">home</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-center align-self-center">
                                        <HeaderLogo logoColor="light" />
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            {/* <SearchModal /> */}

                                            <div className="menu-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg  border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close">
                                                <div class="container" >
                                                  <div class="x1"></div>
                                                  <div class="x2"></div>
                                                  <div class="x3"></div>
                                                 </div>
                                                </button>
                                            </div>
                                        </div>

                                       
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered menu-primary-show-1-nav-item menu-secondary-show-1-nav-item">
                                <div className="animated zoomin w-100">
                                    <ModalMenuPrimary />

                                    {/* <ModalMenuSecondary /> */}

                                    <div className="modal-text">
                                        <p>© 2022 Gotham Apples. Created by Luis Ascencio</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                {/* <ModalMenuLanguages /> */}
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default MenuModal;
