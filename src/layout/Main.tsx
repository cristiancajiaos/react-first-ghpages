import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGlobe, faCheck, faTimes  } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconText {
  icon: IconProp;
  text: string;
}

const iconsTexts: IconText[] = [{
  icon: faUser,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  icon: faGlobe,
  text: 'Morbi vitae est quam.'
}, {
  icon: faCheck,
  text: 'Ut consequat ante et augue ullamcorper malesuada.'
}, {
  icon: faTimes,
  text: 'Nulla vitae convallis lorem.'
}];

export const Main = () => {
  return (
    <>
      <main>
        <Container fluid className="my-2">
          {iconsTexts.map(({icon, text}) => {
            return (
              <p><FontAwesomeIcon icon={icon} /> {text}</p>
            )
          })}
        </Container>
      </main>
    </>
  );
}