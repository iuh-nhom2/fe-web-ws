import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import createClient from "../../../apollo/applloClient";
import USERS from '../../../apollo/query/users';

const ListChatUser = ({ user }) => {
  const [openModalCreateRoom, setOpenModalCreateRoom] = useState(false);
  const [userName, setUserName] = useState("");
  const [listUserSearch, setListUserSearch] = useState([]);

  const getRoomChatUser = async () => {
    try {
    } catch (error) {
      console.log("error", error);
    }
  };

  const craeteRoomChat = async () => {
    try {
      const client = await createClient();
      
    } catch (error) {
      console.log("error", error);
    }
  };

  const searchUser = async ()=> {
    try {
      const client = await createClient();
      const resultSearch = await client.query({
        query: USERS,
        variables:{
          userName: 'kietletuan3'
        }
      })
      console.log('resultSearch',resultSearch);
      if(resultSearch.data?.users) {
        setListUserSearch(resultSearch.data.users);
      }
    }catch(error){
      console.log('error', error);
    }
  }

  useEffect(() => {
    //get room chat user
  }, [user]);

  return (
    <div>
      <div
        onClick={() => {
          setOpenModalCreateRoom(true);
        }}
      >
        Create room chat
      </div>
      ListChatUser
      {/* modal create user */}
      <Modal
        isOpen={openModalCreateRoom}
        toggle={() => {
          setOpenModalCreateRoom(!openModalCreateRoom);
        }}
      >
        <ModalHeader
          close={
            <button className="close" onClick={()=>{
              setOpenModalCreateRoom(false);
            }}>
              ×
            </button>
          }
          toggle={() => {
            setOpenModalCreateRoom(!openModalCreateRoom);
          }}
        >
          Create room chat
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xl={9}>
              <Input
                value={userName}
                placeholder={"Enter your username"}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Col>
            <Col xl={2}>
              <Button onClick={()=>{ searchUser()}} color="primary" outline>
                Search
              </Button>
            </Col>
          </Row>
          <div>
            {listUserSearch?.map((item, index) => {
              return (
                <Col onClick={()=>{craeteRoomChat(item)}} className="mt-2 mb-2 border p-2" key={'listUserSearch' + index}>
                  <div>{item.firstName +' '+item.lastName}</div>
                </Col>
              )
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setOpenModalCreateRoom(false);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ListChatUser;
