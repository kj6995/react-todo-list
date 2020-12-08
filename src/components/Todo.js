import React from "react";
import {ACTIONS} from "./LogicCode";

const Todo = ({todo, dispatch}) => {
	return (
		<div>
			<div
				style={{
					padding: "10px",
				}}
			>
				<span
					style={{
						color: todo.complete ? "green" : "red",
					}}
				>
					{todo.name}
				</span>
				<button
					className="button btn_toggle"
					onClick={() =>
						dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})
					}
				>
					Toggle
				</button>
				<button
					className="button btn_del"
					onClick={() =>
						dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})
					}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Todo;
