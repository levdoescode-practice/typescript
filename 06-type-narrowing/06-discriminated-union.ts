type UserApiResponse61 = {
    status: "Error" | "Success";
    data?: { id: string; name: string };
    errorMessage?: string;
};

function handleResponse61(res: UserApiResponse61) {
    if (res.status === "Success") {
        console.log(res.data.name); // Logs the name from 'data' if the status is 'Success'
    } else {
        console.log(res.errorMessage.length); // Logs the length of the 'errorMessage' string if the status is 'Error'
    }
}

// We can use a discriminated union to narrow the type of res.data
type SuccessResponse = {
    status: "Success";
    data: { id: string; name: string };
};

type ErrorResponse = {
    status: "Error";
    errorMessage: string;
};

type UserApiResponse62 = SuccessResponse | ErrorResponse;  // Discriminated union

function handleResponse62(res: UserApiResponse62) {
    if (res.status === "Success") {
        console.log(res.data.name);
    } else {
        console.log(res.errorMessage.length);
    }
}

// This only works with literal values, not 'string', 'number', 'boolean', or 'symbol'

// In a switch statement
function handleResponse63(res: UserApiResponse62) {
    switch (res.status) {
        case "Success":
            console.log(res.data.name);
            break;
        case "Error":
            console.log(res.errorMessage.length);
            break;
    }
}
