import styled from "styled-components";

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  // @media (max-width: 800px) {
  //   --columns: 1;
  // }
`

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`

// Single grid item (for homepage)

export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
  
    height: auto;
    font-size: 0;
  }

  p {
    transform: rotate(-2deg) translateY(-140%);
    position: absolute;
    width: 100%;
    left: 0;
  }

  .mark {
    display: inline;
  }

  @keyframes shine {
    from {
      background-position: 200%;

    } to {
      background-position: -40px
    }
  }

  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg, 
      var(--background) 0px, 
      var(--shine) 40px, 
      var(--background) 80px
    );
    background-size: 500px;
    width: 100%;
    animation: shine 1s infinite linear;

  }

`