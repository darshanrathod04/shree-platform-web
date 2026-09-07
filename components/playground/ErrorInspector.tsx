'use client';

export default function ErrorInspector({
  response
}:{
  response:any
}){

  if(!response?.error){
    return null;
  }

  return(

    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">

      <h3 className="text-red-400 font-semibold mb-3">
        SDK Exception
      </h3>

      <div className="space-y-2 text-sm">

        <Row label="Message" value={response.error}/>

        <Row label="Stage" value={response.stage}/>

        <Row label="Request ID" value={response.requestId}/>

        <Row label="Code" value={response.code}/>

      </div>

    </div>

  );
}

function Row({label,value}:any){
  return(
    <div className="flex justify-between border-b border-red-500/10 pb-1">
      <span className="text-gray-400">{label}</span>
      <span>{value || '-'}</span>
    </div>
  )
}