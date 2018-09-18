import {Link} from '../../routes'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
  	<Link prefetch route="home">
  	  <a style={linkStyle}>Home</a>
  	</Link>
  	<Link prefetch route="about">
  	  <a style={linkStyle}>About</a>
  	</Link>
  </div>
)

export default Header
