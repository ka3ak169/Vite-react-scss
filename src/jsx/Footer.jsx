function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p className="footer__description">
            website designed by 
            <a className="footer__link" href='https://github.com/ka3ak169'>
              <span className="footer__name">Alexey Kazakov</span>
              <img className="footer__icon" src='images/icons8-github-50.png' alt='GitHub' />
            </a>
          </p>
          <p className="footer__year">2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
