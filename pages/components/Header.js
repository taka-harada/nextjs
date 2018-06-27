import {Link} from '../../routes'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
  	<Link route="home">
  	  <a style={linkStyle}>Home</a>
  	</Link>
  	<Link route="about">
  	  <a style={linkStyle}>About</a>
  	</Link>
  </div>
)

export default Header
