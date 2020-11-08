import styled from 'styled-components'



const OrderStyles = styled.form`
  display: grid;
  grid-tempalte-columns: 1fr 1fr;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start; 
    &.order,
    &.menu {
      grid-column: span 1;
    }
  }
  // we made two columns but made every single fieldset span both of them so they get 100% wide

  p {
    margin: 0;

  }

  button {
    font-size: 1.5rem;
  }

  // when there's a button that comes next to a button
  button + button {
    margin-left: 1rem;
  }

  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0,
    right: 0,
    box-shadow: none;
    line-height: 1rem; 
  }

  .mapleSyrup {
    display: none;
    // or scale to 0 or 1px;
    // text indent...
  }
 
  // @media (max-width: 900px) {
  //   fieldset.menu,
  //   fieldset.order {
  //     grid-column: span 2;
  //   }

  }
`

export default OrderStyles