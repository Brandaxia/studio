
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileArchive } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DownloadGuidePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Download className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl">Cómo Descargar el Proyecto</CardTitle>
          <CardDescription className="text-lg">
            Seguí estos pasos para obtener una copia ZIP de todo el código.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Paso 1: Localizá el Botón de Descarga</h3>
            <p className="text-muted-foreground">
              En la interfaz de Firebase Studio, buscá un botón o un ícono de descarga. Generalmente se encuentra en la barra de herramientas superior o en un menú de opciones (a veces representado por tres puntos verticales).
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border-2 border-dashed">
               <Image
                  src="https://picsum.photos/1200/300?random=42"
                  alt="Ejemplo visual de dónde podría estar el botón de descarga en la interfaz de un editor de código."
                  width={1200}
                  height={300}
                  className="object-cover"
                  data-ai-hint="interface button download"
                />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              (Esta es una imagen de ejemplo. La posición exacta puede variar.)
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Paso 2: Hacé Clic y Esperá</h3>
            <p className="text-muted-foreground">
              Al hacer clic en el botón "Descargar Código" (o similar), el sistema comenzará a empaquetar todos los archivos del proyecto en un único archivo ZIP. Este proceso puede tardar unos momentos.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Paso 3: Guardá el Archivo ZIP</h3>
            <p className="text-muted-foreground">
              Una vez que el proceso finalice, tu navegador te pedirá que guardes el archivo ZIP. Elegí una ubicación en tu computadora y ¡listo! Ya tenés una copia completa y local de Ainsophic Academy.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-lg border bg-background p-4">
            <FileArchive className="h-8 w-8 flex-shrink-0 text-muted-foreground" />
            <div>
              <h4 className="font-semibold">¿Sigue sin aparecer?</h4>
              <p className="text-sm text-muted-foreground">
                Si aún no encontrás el botón, intentá recargar la página o buscá en la documentación de Firebase Studio.
              </p>
            </div>
          </div>
           <div className="pt-4 text-center">
            <Link href="/admin" className="text-sm text-primary hover:underline">
              Volver al Panel de Administración
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
