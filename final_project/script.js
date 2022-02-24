function check(id) {
	var list = JSON.parse(localStorage.getItem("list"));
	list.forEach((data, index) => {
		data = JSON.parse(data);
		if (data.id == id) {
			data.status = !data.status;
			list.splice(index, 1, JSON.stringify(data));
		}
	});
	localStorage.setItem("list", JSON.stringify(list));
}

function remove(id) {
	var list = JSON.parse(localStorage.getItem("list"));
	list.forEach((data, index) => {
		data = JSON.parse(data);
		if (data.id == id) {
			list.splice(index, 1);
			localStorage.setItem("list", JSON.stringify(list));
		}
	});
	$("#list" + id).remove();
}

$(document).ready(function () {
	var data = JSON.parse(localStorage.getItem("list"));
	var task = data ? data : [];
	// console.log(task, localStorage.getItem("list"));
	$("#btn-add").click(function () {
		if ($("#list-input").val()) {
			var newData = {
				id: task.length + 1,
				name: $("#list-input").val(),
				status: false,
			};
			task.push(JSON.stringify(newData));
			localStorage.setItem("list", JSON.stringify(task));
			$("#list").append(
				`<div id="list${newData.id}" class="flex w-full my-2 rounded-md shadow-xl border-slate-600 items-center">
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic checkbox toggle button group">
                        <input
                            type="checkbox"
                            class="btn-check"
                            id="check${newData.id}"
                        />
                        <label class="btn btn-outline-success" for="check${newData.id}" onClick="check(${newData.id})">
                           <i class="align-middle fa-solid fa-check"></i
                        ></label>
                    </div>
                    <span class="inline-block w-3/4 ml-2 font-semibold text-break align-middle"
                        >${newData.name}</span>
                    <button class="float-right ml-auto btn btn-danger" onClick="remove(${newData.id})">
                        <i class="font-semibold fa-solid fa-trash text-slate-50"></i>
                    </button>
            </div>`
			);

			$("#list-input").val("");
		}
	});

	task.forEach((data, index) => {
		data = JSON.parse(data);
		$("#list").append(
			`<div id="list${
				data.id
			}" class="flex w-full my-2 rounded-md shadow-xl border-slate-600 items-center">
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic checkbox toggle button group">
                        <input
                            type="checkbox"
                            class="peer btn-check"
                            id="check${data.id}"
                            ${data.status ? "checked" : ""}
                        />
                        <label class="btn border-2 border-green-900 peer-checked:text-white peer-checked:bg-green-900" for="check${
													data.id
												}" onClick="check(${data.id})">
                           <i class="align-middle fa-solid fa-check"></i
                        ></label>
                    </div>
                    <span class="inline-block w-3/4 ml-2 font-semibold text-break align-middle"
                        >${data.name}</span>
                    <button class="float-right ml-auto btn btn-danger" onClick="remove(${
											data.id
										})">
                        <i class="font-semibold fa-solid fa-trash text-slate-50"></i>
                    </button>
            </div>`
		);
	});
});
