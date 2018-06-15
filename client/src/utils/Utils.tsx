import * as React from "react";
import * as qs from 'query-string';

export function GetSchedulerSearchString(locationSearch: string, idName: string, id: string): string {
    let existedQueryParams = qs.parse(locationSearch);
    //if no query then just stringify query
    if (locationSearch == "") {
        return qs.stringify({[idName]: id});
    }
    //else then update or append this query to current params
    else {
        const jsonString = JSON.stringify(existedQueryParams);
        let dataObj = JSON.parse(jsonString);
        dataObj[idName] = id;

        return qs.stringify(dataObj);
    }
}