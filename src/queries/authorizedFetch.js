const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
};

/**
 * Zapouzdřující funkce pro fetch, vytvářející vrstvu pro komunikaci se serverem.
 * @param {string} path - Cílová adresa pro požadavek.
 * @param {Object} params - Parametry pro požadavek.
 * @returns {Promise<Response>} - Výsledek fetch požadavku jako Promise.
 */
export const authorizedFetch = (path, params) => {
    const newParams = { ...globalFetchParams, ...params }; // umožňuje přepsat výchozí parametry (globalFetchParams)
    const overridenPath = '/api/gql';
    return fetch(overridenPath, newParams); // params.header by měl být rozšířen o autorizační TOKEN
};
