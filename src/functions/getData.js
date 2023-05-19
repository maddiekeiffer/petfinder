export async function getData() {
    const url = `https://api.petfinder.com/v2/animals?type=dog&location=68104&distance=50`;

    const userToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTG03NER0ZHozUlEwR0hjVzlmVm92RWY5R3RxSHBqeHdISWVOTVpVMlhXQXd1NkFFdyIsImp0aSI6IjQ0YWRlZGIzYmRiYmJkNGI2MDk4MDRkOWU0NzRkMzE3MWU2YjM2OTY0ZjM3YjVhMDkzNThiNDUzNzMzMjEyNmUwYWJkNzI5ZjFiNmIwZmIyIiwiaWF0IjoxNjg0NDU1OTg5LCJuYmYiOjE2ODQ0NTU5ODksImV4cCI6MTY4NDQ1OTU4OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.fK_z59aDD5eraPqpe_50LXqlmxW5G5HiWNJYt66tGktlqCP330auL9swQBaRYVvQ8mWEzC7luH22L99MspED_LpxuFauqxx5iWAO3OMmEW7B8-llHVCV5F1cFbZ3U5TO8xG2IpRL0uN0MzVSFte6pNZlj18_hgkHxjnwQL2yhWvH2NHlLEF9HLqjhru09w7r8j-PC0L-3MaRyA9eeRju8Z-xuV-i733QYE3B-i9TSvepZ1WwxTx2iaF_t5sqIHUBzwR3wt2rYkqCURMv0plo-_-0_hv33AmD1BrLGLfSJKLGjIalezT2FIeHDzFQwV05GBnG5A5MuIUOpQJ9wMu4dg`;

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            }
        }
        );
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error.message);
    }
}   