import { Footer, Div } from '../semantics/index';

const FooterBar = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Footer class>
      <Div>
        <p className={``}>
          Made with
          <span>&nbsp;💜&nbsp;</span>
          by&nbsp;
          <a href="https://github.com/WomB0ComB0" target="_blank" rel="noreferrer noopener">
            Mike Odnis
          </a>
        </p>
      </Div>
      <Div>
        <p className={``}>
          <small>
            Copyright © <span>{year}</span> Mike Odnis. All rights reserved
          </small>
        </p>
      </Div>
    </Footer>
  );
};

export default FooterBar;
