import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth-context'

import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Card from './Card/Card';
import Tags from './Tags'

const Nomenclature = props => {
  
  const auth = useContext(AuthContext)

  return (
    <Columns.Column breakpoint="mobile">
      <Box>
        <Media>
          <Media.Item renderAs="figure" position="left">
            {props.nomenclature.cards.slice(0, 1).map(card => (
              <Card
                key={card.id}
                alt={card.originalname}
                src={card.location}
                imageCount={props.nomenclature.cards.length}
                images={props.nomenclature.cards}
              />
            ))}
            {auth.isLoggedIn && (
            <Button
              renderAs={Link}
              to={`/nomenclature/${props.nomenclature.id}`}
            >
              Télécharger
            </Button> )}
            {/* <Button
              renderAs={Link}
              to={`/nomenclature/view/${props.nomenclature.id}`}
            >
              Voir
            </Button> */}
          </Media.Item>

          <Media.Item>
            <Content>
            <Heading size={3}>
              {props.nomenclature.name ? props.nomenclature.name : 'sans nom'}
            </Heading>
            <small>Par <strong>{props.nomenclature.author}</strong></small>
            <Tags tags={props.nomenclature.tags} />
            <Columns>
              <Columns.Column>
                <div className="field is-grouped is-grouped-multiline">
                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-dark">Images</span>
                      <span className="tag is-success">Oui</span>
                    </div>
                  </div>

                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-dark">Label</span>
                      <span className="tag is-success">Oui</span>
                    </div>
                  </div>

                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-dark">Description</span>
                      <span className="tag is-success">Oui</span>
                    </div>
                  </div>

                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-dark">Texte à trous</span>
                      <span className="tag is-danger">Non</span>
                    </div>
                  </div>
                </div>
              </Columns.Column>

              <Columns.Column>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" href="/" aria-label="reply">
                      <span className="icon is-small">
                        <i className="fa fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a className="level-item" href="/" aria-label="like">
                      <span className="icon is-small">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </Columns.Column>
            </Columns>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Téléchargements</p>
                  <p className="title is-5">3,456</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">J'aime</p>
                  <p className="title is-5">123</p>
                </div>
              </div>
            </nav>
            </Content>
          </Media.Item>
        </Media>
      </Box>
    </Columns.Column>
  );
};
export default Nomenclature;
