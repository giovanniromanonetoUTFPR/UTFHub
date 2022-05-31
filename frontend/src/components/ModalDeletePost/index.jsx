import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalDeletePost = (props) => {
  const postId = useSelector((state) => state.postId);

  function deletarPost() {
    console.log("id: " + postId);
    axios
      .delete(`http://localhost:8080/posts/${postId}/delete`)
      .then((res) => {
        props.onHide();
      })
      .catch((error) => {
        console.log("Erro: " + error);
      });
  }

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Deletar Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>Você tem certeza que quer deletar o post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
        <Button variant="danger" onClick={deletarPost}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeletePost;
