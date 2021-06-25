import { useQuery} from 'react-query';

function Get(key : string, url : string) {
	return useQuery<any, Error>(key, () => {
		return fetch(url).then(res => res.json());
	});
}

function Post(url: string, data : object) {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(res => res.json());	
}

export default Get;

export {Get, Post};