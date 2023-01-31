import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Anotacoes = ({ text, editar, deletar }) => {
  return (
    <div className="anotacao">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={editar} />
        <AiFillDelete className="icon" onClick={deletar} />
      </div>
    </div>
  );
};

export default Anotacoes;
