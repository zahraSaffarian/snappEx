export const getListService = async (page) => {
    return await fetch(
        `https://api.snapp.express/mobile/v2/product-variation/index?filters={}&fetch_filters=1&fetch_categories=1&menu_category_id=390176&vendorCode=po9qzk&page=${page}&client=PWA&optionalClient=PWA&deviceType=PWA&appVersion=5.6.6&optionalVersion=5.6.6&UDID=ca69b564-a46e-4b71-a59b-6e08975ac8d3`
    )
        .then((res) => res.json())
        .then((json) => {
            console.log("hello");
            //   console.log(json);
            // setList(json.data);
            return json
        })
    return null
}