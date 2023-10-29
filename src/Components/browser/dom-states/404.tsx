import { useLocation } from 'react-router-dom';
import { Main, Section, Article, Menu } from '../../semantics/index';
import { Button, buttonVariants } from '../../ui/button';

export default function NotFound() {
  const location = useLocation();
  const { statusText, message } = (location.state as { statusText: string; message: string }) || {
    statusText: '404',
    message: 'The requested page could not be found.',
  };
  return (
    <>
      <Main className="flex flex-col items-center justify-center w-screen h-screen">
        <Section className={``}>
          <Article className={``}>
            <h1 className={``}>
              <span>{statusText}</span>
              <i> - </i>
              <span>
                <>Not Found</>
              </span>
            </h1>
            <p>
              <b>{message}</b>
            </p>
          </Article>
          <Menu className={`flex  justify-around`}>
            <li>
              <Button
                className={`              ${buttonVariants({
                  variant: 'ghost',
                })}`}
              ></Button>
            </li>
            <li>
              <Button
                className={`              ${buttonVariants({
                  variant: 'ghost',
                })}`}
              ></Button>
            </li>
          </Menu>
        </Section>
      </Main>
    </>
  );
}
