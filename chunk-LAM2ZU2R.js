import{a as i}from"./chunk-4K6FQLZF.js";import{P as c,U as s,f as n,lc as p,oc as h,ua as o}from"./chunk-TXPC7SVX.js";var j=(()=>{let r=class r{constructor(t,e){this._httpClient=t,this._platform=e,this.cartapi="api/v1/cart",this.numberofcartIitem=new n(0),p(e)&&this.getcartinfo().subscribe({next:l=>{this.numberofcartIitem.next(l.numOfCartItems)}})}getcart(t){return this._httpClient.post(`${i.baseUrl}/${this.cartapi}`,{productId:t})}getcartinfo(){return this._httpClient.get(`${i.baseUrl}/${this.cartapi}`)}deletespaecific(t){return this._httpClient.delete(`${i.baseUrl}/${this.cartapi}/${t}`)}cartplus(t,e){return this._httpClient.put(`${i.baseUrl}/${this.cartapi}/${t}`,{count:e})}Clearcart(){return this._httpClient.delete(`${i.baseUrl}/${this.cartapi}`)}};r.\u0275fac=function(e){return new(e||r)(s(h),s(o))},r.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();export{j as a};
