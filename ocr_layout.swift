import Foundation
import Vision
import AppKit

guard CommandLine.arguments.count > 1 else {
    print("Usage: swift ocr_layout.swift <image-path>")
    exit(1)
}

let imagePath = CommandLine.arguments[1]
let imageUrl = URL(fileURLWithPath: imagePath)

guard let image = NSImage(contentsOf: imageUrl),
      let tiffData = image.tiffRepresentation,
      let cgImageSource = CGImageSourceCreateWithData(tiffData as CFData, nil),
      let cgImage = CGImageSourceCreateImageAtIndex(cgImageSource, 0, nil) else {
    print("Failed to load image at \(imagePath)")
    exit(1)
}

let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
let request = VNRecognizeTextRequest { (request, error) in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    for observation in observations {
        if let topCandidate = observation.topCandidates(1).first {
            let box = observation.boundingBox
            // Origin in VNImageRequestHandler coordinates is bottom-left, y is flipped
            print(String(format: "Text: \"%@\" | Box: x=%.3f, y=%.3f, w=%.3f, h=%.3f", 
                         topCandidate.string, box.origin.x, box.origin.y, box.size.width, box.size.height))
        }
    }
}

request.recognitionLevel = .accurate

do {
    try requestHandler.perform([request])
} catch {
    print("Error performing OCR: \(error)")
    exit(1)
}
