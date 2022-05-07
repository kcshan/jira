import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel"
import { List } from "./list"

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => { 
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: ''
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async response => {
      if (response.ok) {
        setList(await response.json());
      }
    })
  }, [param])

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}/>
    <List users={users} list={list}/>
  </div>
}