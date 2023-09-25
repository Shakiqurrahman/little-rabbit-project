import Accordion from "react-bootstrap/Accordion";

function AskQuestionItem() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the smart contract?</Accordion.Header>
        <Accordion.Body>
          <p>
          Is a term used to describe a computer protocol that facilitates a contract or agreement between one party and another without going through a third party. Such a smart contract protocol must be able to verify the implementation of the contract recipient's obligations from an agreement.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Where can I buy Little Rabbit coin? </Accordion.Header>
        <Accordion.Body>
          <p>
          For now you can buy it on pancakeswap, we are still in the development process, and we plan to trade our coins in the big market.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default AskQuestionItem;
