import Component from './component';

class Footer extends Component {
    get all() { return this.base.contains('All') }
    get active() { return this.base.contains('Active') }
    get completed() { return this.base.contains('Completed') }
}

export default Footer;
