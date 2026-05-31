import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer >
      <div>
        <span>© 2025 Barbearia Mister Mustache. Todos os direitos reservados. {new Date().getFullYear() }
        </span>
      </div>
    </footer>
  );
};


export default FooterComponent;
