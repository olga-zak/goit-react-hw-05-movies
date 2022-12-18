import { Container } from 'components/CommonStyles';
import { List, Item, HomeLink, MoviesLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <HomeLink to="/" end>
              Home
            </HomeLink>
          </Item>
          <Item>
            <MoviesLink to="/movies">Movies</MoviesLink>
          </Item>
        </List>
      </nav>
    </Container>
  );
};
