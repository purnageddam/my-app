import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyDynamicInputComponent></MyDynamicInputComponent>
    </div>
  );
}
const MyDynamicInputComponent = () => {
  const [list, setList] = useState([]);

  const [tweetInput, setTweetInput] = useState("");
  const readAndUpdateTweet = (e) => setTweetInput(e.target.value);
  const postTheTweet = () => {
    setList([tweetInput, ...list]);
    setTweetInput("");
  };
  return (
    <div>
      <h2>Tweets</h2>
      <div>
        <input
          type="text"
          value={tweetInput}
          onChange={(e) => readAndUpdateTweet(e)}
          placeholder="write something"
        />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const MyInputComponent = () => {
  const [list, setList] = useState(["Andhra", "Hyderabad"]);
  const postTheTweet = () => {
    setList(["Delhi", ...list]);
  };
  return (
    <div>
      <h1>Mini Twitter</h1>
      <div>
        <input type="text" value="" placeholder="write something..." />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>
      <h2>Tweets</h2>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const InlineStyleComponent = () => {
  const [counter] = useState(100);
  return (
    <div>
      <h1>Inline Styling</h1>
      <div style={{ backgroundColor: "black", color: "white", padding: "8px" }}>
        {counter}
      </div>
    </div>
  );
};
const ListExample2 = () => {
  const [list, setList] = useState([1, 2]);
  const addNewItem = () => {
    setList([Math.random(), ...list]);
  };
  return (
    <div>
      <h1>List Example2</h1>
      <div>
        <input
          type="button"
          value="Add nEW Element"
          onClick={(e) => addNewItem()}
        />
      </div>
      {list.map((item, index) => (
        <div key={index} className="beautify">
          {item}
        </div>
      ))}
    </div>
  );
};

const ListExampleComponent = () => {
  const [list, setList] = useState([1, Math.random()]);

  const updateList = () => {
    const newList = [...list];
    newList.unshift(Math.random());
    setList(newList);
  };
  return (
    <div>
      <h1>List Example Component</h1>
      <div>
        <input
          type="button"
          value="Add new element"
          onClick={() => updateList()}
        />
      </div>
      {list.map((item, index) => (
        <div key={index}>{item} </div>
      ))}
    </div>
  );
};

const ListComponent = () => {
  const [counter] = useState(100);
  const [username] = useState("Andhra Pradesh");
  const [list] = useState(["Delhi", "Hyderabad", "Chennai"]);
  return (
    <div>
      <h1>List Component</h1>
      <h4>{counter}</h4>
      <h4>{username}</h4>

      {/**Learning List */}
      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

//SUMMARY
function FifthComponent() {
  const [counter] = useState(100);
  const [username] = useState("Andhra Pradesh");
  const updateUsername = () => {};
  const updateCounter = () => {};

  return (
    <div>
      <h1>Fifth Component</h1>
      <div>Counter {counter}</div>
      <div>Username</div>
    </div>
  );
}

//EQUIVALENT TO CLASS IN JAVA
function FourthComponent() {
  let localCounter = 100;
  let [counter, setCounter] = useState(100);

  const updateCounter = () => {
    localCounter = localCounter + 1;

    setCounter(counter + 1);
    console.log("Counter Operation", localCounter, counter);
  };
  return (
    <div>
      <h1>Fourth Component - Event/Action/click</h1>
      <input type="button" value="Update Counter" onClick={updateCounter} />
      <input
        type="button"
        value="Update Counter1"
        onClick={() => updateCounter()}
      />
      <div>React Not Aware - {localCounter}</div>
      <div>React Aware - {counter}</div>
    </div>
  );
}

//EQUIVALENT TO CLASS IN JAVA
function ThirdComponent() {
  const localCounter = 100;

  const [counter] = useState(100);
  return (
    <div>
      <h1>Third Component</h1>
      <div>React Not Aware - {localCounter} </div>
      <div>React Aware - {counter}</div>
    </div>
  );
}

/*SPECIAL FUNCTION :: USING REACT :: return */
const MyComponent = () => {
  return (
    <div>
      <h1>React Heading</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non
        adipisci ipsam, aperiam et obcaecati natus nihil fugiat ex consectetur
        tempora fuga ipsa reprehenderit. Laborum sequi asperiores iusto esse
        libero dolorum quos architecto maiores? Architecto in corporis
        cupiditate a ipsum.
      </div>
      <h4>Heading 6</h4>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        dolorum error pariatur dolore, saepe quaerat tenetur aspernatur ipsum
        facilis beatae, quisquam eligendi animi nulla necessitatibus ad fugiat
        sequi voluptate distinctio quas architecto maiores blanditiis, voluptas
        porro placeat. Aspernatur, deleniti minima labore reprehenderit illo
        amet vero voluptas eligendi iste voluptatum libero ab nesciunt officiis.
        Nihil numquam ex hic distinctio aliquam, earum dignissimos sunt, aut in
        esse illum exercitationem id repellendus perspiciatis ratione sit
        dolorem! Tempora fugiat voluptas commodi maxime suscipit dolorum.
      </div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div>
      <h1>Second Component</h1>
    </div>
  );
};
