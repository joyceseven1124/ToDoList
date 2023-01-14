import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
  docSnapshot,
  getDocs,
  query,
  collection,
  deleteField,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDBhz2egCtA9yL-MtY4hR3YBU_IYn22_vo",
  authDomain: "myapp-65740.firebaseapp.com",
  projectId: "myapp-65740",
  storageBucket: "myapp-65740.appspot.com",
  messagingSenderId: "40797066576",
  appId: "1:40797066576:web:b03c412d920ecb96cc0855",
});

const firestore = getFirestore();

let databaseToDoList = "";

async function writeToDoList(msg, newArrayMessage, setArrayMessage) {
  const docData = { item: msg };
  let docRef = await addDoc(collection(firestore, "toDoList"), docData);
  let result = { [docRef.id]: msg };
}

async function readAsingleDocument() {
  let showDataArray = [];
  const querySnapshot = await getDocs(collection(firestore, "toDoList"));
  querySnapshot.forEach((doc) => {
    let showData = { [doc.id]: doc.data().item };
    showDataArray.push(showData);
  });
}

async function deleteToDocument(id) {
  await deleteDoc(doc(firestore, "toDoList", id));
}

export default {
  firestore: firestore,
  writeToDoList: writeToDoList,
  readAsingleDocument: readAsingleDocument,
  deleteToDocument: deleteToDocument,
};

/*set時的用法
const toDoListData = doc(firestore, `toDoList/toDoList`);
let databaseToDoList = "";

async function writeToDoList(msg) {
  //const docData = { ["item" + id]: msg };
  const docData = { item0: msg };
  await setDoc(toDoListData, docData, { merge: true });
}*/

/*async function readAsingleDocument() {
  const mySnapshot = await getDoc(toDoListData);
  if (mySnapshot.exists()) {
    const docData = mySnapshot.data();
    databaseToDoList = docData["item0"];
  }
}*/

//let toDoListUnsubscribe;

/*function listenToDocument() {
  //readAsingleDocument();
  toDoListUnsubscribe = onSnapshot(toDoListData, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      console.log("x" + databaseToDoList);
      return databaseToDoList;
    }
  });
}

function cancelMyListenerAtTheAppropriateTime() {
  toDoListUnsubscribe();
}

function queryForDocuments() {
  const filterToDoList = query(collection(firestore, "item0"));
}

async function deleteToDocument(msg_id) {
  await updateDoc(toDoListData, {
    ["item" + msg_id]: deleteField(),
  });
}*/
