'use client';

interface Props{
  endpoint:string;
  request:any;
  response:any;
}

export default function DeveloperTools({
  endpoint,
  request,
  response
}:Props){

  function copyCurl(){

    const curl =
`curl -X POST http://localhost:8080${endpoint} \
-H "Content-Type: application/json" \
-d '${JSON.stringify(request)}'`;

    navigator.clipboard.writeText(curl);
  }

  function copyJson(){
    navigator.clipboard.writeText(
      JSON.stringify(response,null,2)
    );
  }

  function exportJson(){

    const blob = new Blob(
      [JSON.stringify(response,null,2)],
      {type:'application/json'}
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href=url;
    a.download='sdk-response.json';
    a.click();

    URL.revokeObjectURL(url);
  }

  return(

    <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5">

      <h3 className="font-semibold mb-4">
        Developer Tools
      </h3>

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={copyCurl}
          className="rounded-lg bg-white/5 p-3 hover:bg-white/10"
        >
          Copy cURL
        </button>

        <button
          onClick={copyJson}
          className="rounded-lg bg-white/5 p-3 hover:bg-white/10"
        >
          Copy JSON
        </button>

        <button
          onClick={exportJson}
          className="rounded-lg bg-white/5 p-3 hover:bg-white/10"
        >
          Export JSON
        </button>

        <button
          className="rounded-lg bg-white/5 p-3 hover:bg-white/10"
        >
          Request Template
        </button>

      </div>

    </div>

  );
}