import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imgPipe'
})
export class ImgPipe implements PipeTransform{

    transform(value: string){
        const arr = value.split("//")
        const str = `${arr[0]}//ru.${arr[1]}`

        return str
    }

}